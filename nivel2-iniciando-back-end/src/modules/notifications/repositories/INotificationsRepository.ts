import ICreationNotificationDTO from '@modules/notifications/dtos/ICreationNotificationDTO';
import Notification from '@modules/notifications/infra/typeorm/schemas/Notification';

export default interface INotificationsRepository {
  create(data: ICreationNotificationDTO): Promise<Notification>;
}
